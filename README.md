# Klar for VSCode

Klar support for Visual Studio Code

## Features

- 📖 Syntax highlighting for Klar and Klon files
- 💡 Language server provided by [KlarLS](https://github.com/ProCode-Software/klar/tree/main/internal/lsp)
- ▶️ Commands and actions related to Klar

## Changelog

See [CHANGELOG.md](./CHANGELOG.md)

## Development

This extension is built using [vsxtools](https://github.com/ProCode-Software/vsxtools).

- TextMate grammars are located in [`src/grammars`](./src/grammars)
- Scripts are located in [`src/extension`](./src/extension)

```sh
bun install # Install dependencies
bun run watch # Watch files for changes; useful in VSCode debugging mode
bun run build # Build extension
bun run pack-vsce # Create .vsix
bun run ext-install # Install the .vsix into your local VSCode installation
```

> TODO: `pack-vsce` should be run instead of `vsxtools pack` until vsxtools is updated to support packing extensions with scripts.

## Contributing

### Issues/Discussions

Issues, bug reports, and discussions should be created in the [main Klar repo](https://github.com/ProCode-Software/klar).

### Pull Requests

When contributing PRs, see the [style guide](https://github.com/ProCode-Software/klar/blob/main/CONTRIBUTING.md#code-style) and [AI policy](https://github.com/ProCode-Software/klar/blob/main/CONTRIBUTING.md#using-ai) in the main Klar repo.

## License

[Apache-2.0](./LICENSE)
