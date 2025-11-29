// Calculate scores and determine potato type
function getProcessedMovies() {
    // Check if 'movies' exists to prevent crash
    if (typeof movies === 'undefined') {
        console.error("Data file not loaded or variable name mismatch.");
        return [];
    }

    return movies.map(movie => {
        // calculate the average
        const total = movie.reviews.length;
        
        // sum up the 'score' property inside the reviews
        const sum = movie.reviews.reduce((acc, review) => acc + review.score, 0);
        
        const percentage = (total === 0) ? 0 : Math.round((sum / total) * 100);

        //determine potato rating
        let type = "";
        
        if (percentage > 55) {
            type = "Good Potato";
        } else if (percentage < 45) {
            type = "Green Potato";
        } else {
            type = "Suspicious Potato";
        }

        // return movie with stats
        return {
            ...movie,
            score: percentage,
            type: type
        };
    });
}