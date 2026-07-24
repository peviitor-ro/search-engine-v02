export const mapApiData = (jobs) => {
    // Log the jobs array for debugging
    return jobs.map(job => ( { 
        title: job.title?.[0] ? job.title[0] : 'nespecificat', 
        company: job.company?.[0] ? job.company[0] : 'nespecificat', 
        location: job.location?.[0] ? job.location[0] : 'nespecificat', 
        country: job.country?.[0] ? job.country[0] : 'nespecificat', 
        link: job.link?.[0] ? job.link[0] : 'nespecificat' 
    }))
}