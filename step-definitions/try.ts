async function add(): Promise<any> {
  const res = await fetch("www.google.com");
  return res.json();
}
