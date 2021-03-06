const Dashboard = ({ name, bio, blog }) => (
  <>
    <h1>{name}</h1>
    <p>{`Bio: ${bio}`}</p>
    <p>{`Blog: ${blog}`}</p>
  </>
);

/*
 * Next.js 9.3 introduced `getServerSideProps`, which isn't an exact replacement, but probably what you want.
 * https://nextjs.org/docs/basic-features/data-fetching
 */
Dashboard.getInitialProps = async () => {
  const res = await fetch('https://api.github.com/users/sandeshshetty516');
  const user = await res.json();

  return user;
};

export default Dashboard;
