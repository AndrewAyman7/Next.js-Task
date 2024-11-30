import Results from '@/components/Results';

export default async function SearchPage({ params }: { params: { term: string } }) {
  const { term } = await params; 
  
  const res = await fetch(
    `https://freetestapi.com/api/v1/movies?search=${term}`
  );
  const data = await res.json();
  return (
    <div>
      {data &&
        data.length ===
        <h1 className='text-center pt-6'>No data found</h1>}
      {data && <Results data={data} />}
    </div>
  );
}