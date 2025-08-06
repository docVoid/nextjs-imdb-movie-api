export default function Home() {
  return <div>Hello From home</div>;
}

//server-side rendering
export async function getServerSideProps() {
  // You can fetch data here and pass it as props
  return {
    props: {}, // will be passed to the page component as props
  };
}
