const AddContactConfig = {
    formList: [
        {
            title: 'First Name',
            name: 'firstName',
            validation: true,
            isRequired: true,
            type: 'text',
            validationType: 'required',
            editable: true,
        },
        {
            title: 'Last Name',
            name: 'lastName',
            validation: true,
            isRequired: true,
            type: 'text',
            validationType: 'required',
            editable: true,
        },
        {
            title: 'Age',
            name: 'age',
            validation: true,
            isRequired: true,
            type: 'text',
            validationType: 'required',
            editable: true,
        },
        {
            title: 'Photo (Url)',
            name: 'photo',
            validation: true,
            isRequired: true,
            type: 'text',
            validationType: 'required',
            editable: true,
        },
    ],
    form : {
        firstName: '',
        lastName: '',
        age: '',
        photo: ''
    },
    formValidation: {}
}

export default AddContactConfig