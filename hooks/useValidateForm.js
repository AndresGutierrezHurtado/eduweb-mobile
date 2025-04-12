import { email, minLength, nonEmpty, object, parse, pipe, regex, string, url } from "valibot";

export const useValidateForm = (form, data) => {
    let schema;

    switch (form) {
        case "login-form":
            schema = object({
                user_email: pipe(
                    string("El correo es requerido"),
                    nonEmpty("El correo es requerido"),
                    email("Ingresa un correo válido")
                ),
                user_password: pipe(
                    string("La contraseña es requerida"),
                    nonEmpty("La contraseña es requerida"),
                    minLength(6, "La contraseña debe tener al menos 6 caracteres")
                ),
            });
            break;
        case "register-form":
            schema = object({
                user_name: pipe(
                    string("El nombre es requerido"),
                    nonEmpty("El nombre es requerido"),
                    minLength(2, "El nombre debe tener al menos 2 caracteres")
                ),
                user_lastname: pipe(
                    string("El apellido es requerido"),
                    nonEmpty("El apellido es requerido"),
                    minLength(2, "El apellido debe tener al menos 2 caracteres")
                ),
                user_email: pipe(
                    string("El correo es requerido"),
                    nonEmpty("El correo es requerido"),
                    email("Ingresa un correo válido")
                ),
                user_phone: pipe(
                    string("El teléfono es requerido"),
                    nonEmpty("El teléfono es requerido"),
                    regex(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
                ),
                user_password: pipe(
                    string("La contraseña es requerida"),
                    nonEmpty("La contraseña es requerida"),
                    minLength(6, "La contraseña debe tener al menos 6 caracteres")
                ),
                role_id: pipe(string("El rol es requerido"), nonEmpty("El rol es requerido")),
                user_image: pipe(
                    string("La imagen es requerida"),
                    nonEmpty("La imagen es requerida"),
                    url("La imagen debe ser una URL válida")
                ),
            });
            break;
        case "update-user-form":
            schema = object({
                user_name: pipe(
                    string("El nombre es requerido"),
                    nonEmpty("El nombre es requerido"),
                    minLength(2, "El nombre debe tener al menos 2 caracteres")
                ),
                user_lastname: pipe(
                    string("El apellido es requerido"),
                    nonEmpty("El apellido es requerido"),
                    minLength(2, "El apellido debe tener al menos 2 caracteres")
                ),
                user_email: pipe(
                    string("El correo es requerido"),
                    nonEmpty("El correo es requerido"),
                    email("Ingresa un correo válido")
                ),
                user_phone: pipe(
                    string("El teléfono es requerido"),
                    nonEmpty("El teléfono es requerido"),
                    regex(/^\d{10}$/, "El teléfono debe tener 10 dígitos")
                ),
                user_image: pipe(
                    string("La imagen es requerida"),
                    nonEmpty("La imagen es requerida"),
                    url("La imagen debe ser una URL válida")
                ),
            });
            break;
        default:
            break;
    }

    try {
        const response = parse(schema, data);
        return { success: true, data: response, message: "Formulario válido" };
    } catch (error) {
        const { name, issues } = error;

        const errors = issues.map((issue) => {
            const { message } = issue;
            const path = issue.path[0].key;
            return { path, message };
        });

        return { success: false, data: errors, message: errors[0].message };
    }
};
