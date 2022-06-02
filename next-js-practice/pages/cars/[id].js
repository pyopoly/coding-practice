import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.css';
import Head from 'next/head';

export default function Car({ car }) {
    const router = useRouter();
    const { id } = router.query;

    return (

        <div className={styles.container}>
            <Head>
                <title>{car.color} {car.id}</title>
            </Head>
            <main className={styles.main}>
                <h1 className={styles.title}> {id}</h1>
            <img src={car.image} width="300px" />
            </main>
        </div>
    );
}

// ===========
// ServerSide Routing
// ============
export async function getServerSideProps({ params }) {

    const req = await fetch(`http://localhost:3000/${params.id}.json`);
    const data = await req.json();

    return {
        props: { car: data },
    }
}



// ===========
// Static Routing
// ============
// export async function getStaticProps({ params }) {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     }
// }

// export async function getStaticPaths() {
//     const req = await fetch('http://localhost:3000/cars.json');
//     const data = await req.json();

//     const paths = data.map(car => {
//         return { params: { id: car } }
//     })

//     return {
//         paths,
//         fallback: false
//     };
// }