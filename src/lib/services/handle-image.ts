export function handleImage(files: FileList | null): Promise<string | undefined> {
  const [file] = files ?? [];

	return new Promise((resolve) => {
    const reader = new FileReader();

		reader.addEventListener('load', ({ target }) => {
			const result = String(target?.result);
			resolve(result);
		}, false);

		if (file) reader.readAsDataURL(file);
  });
}
