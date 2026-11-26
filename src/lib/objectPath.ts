export type PathKey = string | number;

/** Reads a nested value by a path of keys/indices (e.g. ['faqs', 2, 'q']). */
export function getAt(obj: unknown, path: PathKey[]): unknown {
  return path.reduce<unknown>((acc, k) => {
    if (acc == null) return undefined;
    return (acc as Record<string, unknown> | unknown[])[k as never];
  }, obj);
}

/** Returns a new object/array with the value at `path` replaced — does not mutate `obj`. */
export function setAt(obj: unknown, path: PathKey[], val: unknown): unknown {
  if (path.length === 0) return val;
  const [head, ...rest] = path;
  const isArr = Array.isArray(obj);
  const clone: Record<string, unknown> | unknown[] = isArr ? [...(obj as unknown[])] : { ...((obj as Record<string, unknown>) ?? {}) };
  (clone as Record<string, unknown>)[head as string] = setAt((clone as Record<string, unknown>)[head as string], rest, val);
  return clone;
}

/** Splits a dot-path string ("faqs.2.q") into a path array (['faqs', 2, 'q']) for getAt/setAt. */
export function parsePath(path: string): PathKey[] {
  return path.split('.').map((seg) => (/^\d+$/.test(seg) ? Number(seg) : seg));
}
