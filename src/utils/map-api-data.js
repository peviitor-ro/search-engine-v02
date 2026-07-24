const first = (value) => (Array.isArray(value) ? value[0] : value) || null;

export const mapApiData = (jobs) => {
    return jobs.map(job => ({
        title: job.title || 'nespecificat',
        company: job.company || 'nespecificat',
        location: first(job.location),
        county: first(job.county),
        workmode: job.workmode || null,
        salary: first(job.salary),
        date: job.date || null,
        link: job.url || 'nespecificat'
    }))
}
