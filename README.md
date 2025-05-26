# Folder Processor with digest-code

Minimalist CLI to process folders automatically.

## Quick Install

```bash
git clone https://github.com/odutradev/digest-code-cli
chmod +x install.sh
./install.sh
```

## Configuration

Create a `.env`:

```env
BASE_DIR=C:\.projetos
COMMAND=python -m main
WORKING_DIR=C:\.projetos\digest-code
```

## Usage

```bash
digest-code
```

Output:
```
Processing: folder1
Processing: folder2
Processing: folder3
```

## Complete Example

1. **Copy the example:**
   ```bash
   cp .env.example .env
   ```

2. **Run:**
   ```bash
   digest-code
   ```

Done!