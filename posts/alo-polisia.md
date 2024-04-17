---
title: "[EN] ALO POLISIA Community"
excerpt: "[EN] An Encrypt and Decrypt for files and folders!"
date: "Dec 12 2022"
cover_image: "/blog/alop.webp"
alt: "Alo Polisia"
tags1: "PHP"
tags2: "SQL"
---

![imageTitle](https://raw.githubusercontent.com/Rawierdt/GIE/main/title.jpg)

# GIE

## Encrypt and Decrypt

An Encrypt and Decrypt for files and folders for Windows, written in Python.

### Decrypt function

```python
def decrypt_file(input_file: str, password: bytes):
    base_file = os.path.splitext(os.path.basename(input_file))[0]  # Remove all extensions
    while "." in base_file:
        base_file = os.path.splitext(base_file)[0]  # Remove all extensions
        # Add the .key extension to the base file name
    key_file = os.path.join(os.path.dirname(input_file), base_file + ".GKY")
    print(f"Buscando el archivo de la clave: {key_file}")  # Print the name of the key file we are looking for
    if os.path.exists(key_file):
        with open(key_file, "rb") as f:
            key_with_salt = f.read()
            salt = key_with_salt[:16]  # Get the stored salt
            derived_key = hashlib.pbkdf2_hmac('sha256', password, salt, 100000, 32)
            # print("La clave se recuperó con éxito.")
            # print(f"Longitud de la clave: {len(derived_key)}")
            # print(f"Longitud del salt: {len(salt)}")

        with open(input_file, "rb") as file_in:
            iv = file_in.read(16)
            encrypted_data = file_in.read()

        cipher = Cipher(algorithms.AES(derived_key), modes.CBC(iv), backend=default_backend())
        decryptor = cipher.decryptor()

        decrypted_data = decryptor.update(encrypted_data) + decryptor.finalize()
        unpadded_data = decrypted_data.rstrip(b'\\x00')

        output_file = os.path.splitext(input_file)[0]
        with open(output_file, "wb") as file_out:
            file_out.write(unpadded_data)

        print(Fore.LIGHTCYAN_EX + f"Archivo DESENCRIPTADO guardado como: {output_file}" + Style.RESET_ALL)
        os.remove(input_file)

        # Delete the key file after successful decryption
        os.remove(key_file)
        # print(f"Archivo de la clave {key_file} eliminado con éxito.")

    else:
        print(Fore.LIGHTRED_EX + "No se encontró la clave." + Style.RESET_ALL)

```

---

### TODO List

* [ ] Password check

* [x] AES

* [ ] UI Menu

### 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to check issues page.

### ❤️ Show your support

Give a ⭐️ if this project helped you!

### 📝 License

Copyright © 2024 [Rawier](https://rawier.vercel.app). This project is [MIT](/LICENSE) licensed.
