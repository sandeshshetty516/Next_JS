export default (req, res) => {
    const {
        query: {id}
    } = req;

    res.status(200).json({
        email: 'sandeshshetty516@gmail.com',
        id,
        name: 'Sandesh Shetty'
    });
};
