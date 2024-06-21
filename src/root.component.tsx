import { publicApiFunction, testApiFunction } from "utility-microapp";

export default function Root(props) {
  console.log(`SECOND MFE ${JSON.stringify(props)}`);
  return (
    <section>
      <h2>{publicApiFunction()}</h2>
      <h2>{testApiFunction()}</h2>
      <h1>Root from second mfe mounted</h1>
    </section>
  );
}
