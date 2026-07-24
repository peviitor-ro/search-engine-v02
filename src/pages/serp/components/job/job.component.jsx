import React from 'react';
import './job.style.scss';

import mapPin from '../../../../assets/svgs/map_pin.svg';
import briefcase from '../../../../assets/svgs/briefcase.svg';
import arrowRight from '../../../../assets/svgs/arrow_right.svg';

const WORKMODE_LABELS = {
  remote: 'Remote',
  'on-site': 'La birou',
  hybrid: 'Hibrid'
};

const formatDate = (date) => {
  const parsed = new Date(date);

  if (!date || Number.isNaN(parsed.getTime())) return null;

  return parsed.toLocaleDateString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric' });
};

export const Job = ({ title, company, location, county, workmode, salary, date, link }) => {
  const jobLocation = location || county;
  const postedOn = formatDate(date);
  const workmodeLabel = WORKMODE_LABELS[workmode] || workmode;

  return (
    <section className='job'>
      <div className="details">
        <h2 className='position'>{title}</h2>
        <p className='company'>{company}</p>
        {jobLocation && (
          <p className='location'><img src={mapPin} alt='map pin' className='icon' />{jobLocation}</p>
        )}
        {(workmodeLabel || salary || postedOn) && (
          <div className='meta'>
            {workmodeLabel && (
              <span className='badge'>
                <img src={briefcase} alt='mod de lucru' className='icon' />
                {workmodeLabel}
              </span>
            )}
            {salary && <span className='badge salary'>{salary}</span>}
            {postedOn && <span className='posted-date'>Publicat pe {postedOn}</span>}
          </div>
        )}
      </div>
      <div className='button-position'>
        <a href={link} target="_blank" rel="noreferrer" className='btn-yellow btn'>Vezi postul <img src={arrowRight} alt='arrow right' className='icon' /></a>
      </div>
    </section>
  )
}