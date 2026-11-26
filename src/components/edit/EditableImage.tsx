'use client';

import { useState } from 'react';
import Image, { type ImageProps } from 'next/image';
import { useEditMode } from './EditModeProvider';
import ImagePickerModal from './ImagePickerModal';

type EditableImageProps = Omit<ImageProps, 'src' | 'alt'> & {
  slug: string;
  path: string;
  src: string;
  alt: string;
};

export default function EditableImage({ slug, path, src, alt, ...imageProps }: EditableImageProps) {
  const { editing, patchField } = useEditMode();
  const [value, setValue] = useState({ src, alt });
  const [open, setOpen] = useState(false);

  const image = <Image {...imageProps} src={value.src} alt={value.alt} />;

  if (!editing) {
    return image;
  }

  return (
    <span className="editable-image-wrap">
      {image}
      <span className="editable-image-overlay" onClick={() => setOpen(true)}>
        ✏ Change image
      </span>
      {open && (
        <ImagePickerModal
          value={value}
          onClose={() => setOpen(false)}
          onSave={async (v) => {
            await patchField(slug, path, v);
            setValue(v);
          }}
        />
      )}
    </span>
  );
}
