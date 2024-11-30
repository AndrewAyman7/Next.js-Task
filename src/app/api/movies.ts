export async function getAllMovies():Promise<any[]> {
    const response = await fetch(
        'https://freetestapi.com/api/v1/movies'
    );
    if (!response.ok) throw new Error('Failed to fetch movies');
    return response.json();
}