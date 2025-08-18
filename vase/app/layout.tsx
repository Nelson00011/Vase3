import './assets/global.css'

export const metadata = {
    title: "Vase3",
    description: "The Formula one questions, repeat again with another data type"
}

const RootLayout = ({ children }) => {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}

export default RootLayout
