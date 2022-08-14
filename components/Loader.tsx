export default function Loader({ show }: { show: boolean }) {
    return show ?
    <object style={{
        height: '100%',
        width: '100%',
        margin: '0 auto',
    }}
        type="image/svg+xml" data="/logo-loader.svg">logo-loader
    </object> : null;
}