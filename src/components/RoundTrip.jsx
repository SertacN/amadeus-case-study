function RoundTrip() {
  const currentDate = new Date().toISOString().split("T")[0];
  return (
    <div>
      <label htmlFor="">Gidiş Tarihi</label>
      <input min={currentDate} type="date" />
      <label htmlFor="">Dönüş Tarihi</label>
      <input min={currentDate} type="date" />
    </div>
  );
}

export default RoundTrip;
