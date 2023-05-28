from http.client import HTTPException
import bs4
import requests as req

# job class to represent a job
class Job:
    def __init__(self, title, company, location, link):
        self.title = title
        self.company = company
        self.location = location
        self.link = link

    def __str__(self):
        return f'{self.title} - {self.company} - {self.location} - {self.link}'


def scrape_page(page_nr):
    """Scrape a page from jobindex.dk and add all jobs to the job_list
    param: page_nr: the page number to scrape
    """
    url = url = f'https://www.jobindex.dk/jobsoegning?page={page_nr}&q=Softwareudvikler'
    res = req.get(url)
    res.raise_for_status()
    soup = bs4.BeautifulSoup(res.text, 'html.parser')

    # select all elements with class 'PaidJob'
    elements = soup.select('.PaidJob')
    for elem in elements:
        # the majority of the information is in the PaidJob-inner class
        paid_job_inner = elem.select_one('.PaidJob-inner')
        # find all a tags
        links = paid_job_inner.find_all('a')
        # find all p tags
        p_tags = paid_job_inner.find_all('p')
        title = links[1].find('b').getText()
        company = p_tags[0].find('b').getText()
        location = p_tags[0].find('b').getText()
        # the last link is the link to the job
        link_elem = links[-1]
        link = link_elem.get('href') + link_elem.get('data-click')
        new_job = Job(title, company, location, link)
        job_list.append(new_job)


page_nr = 1
has_more_jobs = True

job_list = []

# keep scraping pages until there are no more jobs being added
while has_more_jobs:
    nr_of_jobs = len(job_list)
    # try to scrape the page
    try: 
        scrape_page(page_nr)
    except HTTPException as e:
        print(f'Error scraping page {page_nr}: {e}')
    # increment page number
    page_nr += 1
    # if the number of jobs has not increased, there are no more jobs
    has_more_jobs = len(job_list) > nr_of_jobs
    
# print info about scrape and all jobs
print(f'Number of jobs found: {len(job_list)} after scraping {page_nr} pages')
for job in job_list:
        print(job)