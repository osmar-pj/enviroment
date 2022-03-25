export const getDataDashboard = async (req, res) => {
    try {
        res.status(200).json({
            message: 'ok',
        })
    } catch (error) {
        console.error(error)
    }
}