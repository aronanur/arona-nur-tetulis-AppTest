const Helper = {
    requiredvalidation: (title, value) => {
        return value.trim().length > 0 ? null : `${title} Required`;
    },
    isValidUrl: (str) => {
        let pattern = new RegExp('^(https?:\\/\\/)?'+
            '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+
            '((\\d{1,3}\\.){3}\\d{1,3}))'+
            '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+
            '(\\?[;&a-z\\d%_.~+=-]*)?'+
            '(\\#[-a-z\\d_]*)?$','i'); 
        return !!pattern.test(str);
    }
}

export default Helper