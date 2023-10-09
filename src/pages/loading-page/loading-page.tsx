import './loading-page.css';

function LoadingPage(): JSX.Element {
  return (
    <main className="page-content decorated-page">
      <div className="spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </main>
  );
}

export default LoadingPage;

