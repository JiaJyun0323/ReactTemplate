export default function Demo08_Child({ data1, data2 = "這是預設值" }) {
  if (data1) {
    return (
      <>
        <h3 style={{ color: "red" }}>{data1}</h3>
        <h3 style={{ color: "red" }}>{data2}</h3>
      </>
    );
  }
}
