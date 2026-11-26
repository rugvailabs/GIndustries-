/**
 * Describes one editable field for the generic admin ContentForm. A page's
 * full field list (FieldSchema[]) mirrors the shape of its defaults object —
 * 'object' and 'list' fields nest further FieldSchema[] for their children.
 */
export type FieldSchema =
  | { type: 'text'; key: string; label: string; hint?: string }
  | { type: 'textarea'; key: string; label: string; hint?: string }
  | { type: 'number'; key: string; label: string; hint?: string }
  | { type: 'url'; key: string; label: string; hint?: string }
  | { type: 'image'; key: string; label: string; hint?: string }
  | { type: 'object'; key: string; label: string; fields: FieldSchema[] }
  | { type: 'list'; key: string; label: string; itemFields: FieldSchema[]; addLabel?: string };

/** Builds a blank item for a 'list' field's itemFields, used by the "Add" button. */
export function emptyListItem(itemFields: FieldSchema[]): Record<string, unknown> {
  const item: Record<string, unknown> = {};
  for (const field of itemFields) {
    switch (field.type) {
      case 'image':
        item[field.key] = { src: '', alt: '' };
        break;
      case 'object':
        item[field.key] = emptyListItem(field.fields);
        break;
      case 'list':
        item[field.key] = [];
        break;
      case 'number':
        item[field.key] = 0;
        break;
      default:
        item[field.key] = '';
    }
  }
  return item;
}
