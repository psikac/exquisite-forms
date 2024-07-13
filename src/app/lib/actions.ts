'use server';


export type State = {
    errors?: {
        missingNumber?: string[];
    },
    message?: string | null;
}

export async function createForm(prevState: State, formData: FormData) {
    console.log(formData);

    if(!formData) {
        return {
            errors: {},
            message: "some stuff is missing"
        }
    };
}