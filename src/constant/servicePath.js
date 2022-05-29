const basePath = '/contact'

const servicePath = {
    listContact: { url: basePath, method: 'GET' },
    saveContact: { url: basePath, method: 'POST' },
    deleteContact: { url: basePath, method: 'DELETE' },
    detailContact: { url: basePath, method: 'GET' },
    editContact: { url: basePath, method: 'PUT' }
}

export default servicePath