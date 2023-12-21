import { useEffect, useState } from 'react';

type Contributor = {
  login: string;
  avatar_url: string;
};

export const ContributorList = () => {
  const [contributors, setContributors] = useState<Contributor[]>([]);

  useEffect(() => {
    fetch('./data/contributions.json').then(async (response) => {
      const data = await response.json();
      setContributors(data);
    });
  }, []);

  return (
    <div className={'flex flex-wrap gap-3'}>
      {contributors.map((contributor: Contributor) => (
        <div className={'flex flex-col items-center w-24'}>
          <img className={'w-24 h-24 aspect-square rounded mb-2'} src={contributor.avatar_url} alt={''} />
          <h6>{contributor.login}</h6>
        </div>
      ))}
    </div>
  );
};