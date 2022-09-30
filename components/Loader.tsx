export default function Loader({ show }: { show: boolean }) {
    return show ?
    <object style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh',
        width: '100%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 0,
    }}
        type="image/svg+xml" data="/logo-loader.svg">logo-loader
    </object> : null;
}