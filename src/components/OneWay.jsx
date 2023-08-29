function OneWay() {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <>
      <label htmlFor="">Gidiş Tarihi</label>
      <input min={currentDate} type="date" />
      <label htmlFor="">Dönüş Tarihi</label>
      <input min={currentDate} disabled type="date" />
    </>
  );
}

export default OneWay;
