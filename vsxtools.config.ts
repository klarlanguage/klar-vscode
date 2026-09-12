import type { Config } from 'vsxtools'

export default {
    configurations: {
        default: {
            type: 'language',
            inputs: ['src/grammars/klar.ts', 'src/grammars/klon.ts', 'src/grammars/codeblock.ts'],
            outputFile: 'syntaxes/[name].tmLanguage.json',
        },
    },
    watch: true,
    jsonIndent: 2,
} satisfies Config
