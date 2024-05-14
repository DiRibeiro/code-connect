import Image from "next/image"
import error_404 from '../../public/404.png'
import Link from "next/link"

const NotFound = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}
        >
            <Image src={error_404} style={{ borderRadius: '5px' }} />
            <h1 style={{ color: "#81FE88" }}>OPS! Página não encontrada.</h1>
            <p style={{ color: '#BCBCBC' }}>Vocẽ pode voltar ao feed e continuar buscando projetos incríveis!</p>
            <Link href={'/'} title="Voltar ao feed"> Voltar ao feed </Link>
        </div>
    )
}

export default NotFound