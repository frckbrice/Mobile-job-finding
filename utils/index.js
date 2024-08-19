
// find image in internet and return 200 OK if the image exists
export const checkImage = (uri) => {
    if (!uri)
        return false;

    const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|svg|gif|webp)$', 'i');
    return pattern.test(uri);
}

// const pattern = new RegExp('^https?:\\/\\/(?:www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b(?:[-a-zA-Z0-9()@:%_\\+.~#?&\\/=]*)$');
