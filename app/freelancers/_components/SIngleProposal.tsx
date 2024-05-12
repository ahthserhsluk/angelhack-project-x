import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import data from '@/jsons/proposals';
interface Proposal {
  service: string;
  client: string;
  proposedRate: number;
  status: 'Accepted' | 'Pending' | 'Rejected';
}

const proposals = data

const ProposalList: React.FC = () => {
  return (
    <div className='text-black flex flex-wrap'>
      {proposals.map((proposal, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4">
          <div className={`bg-white rounded-lg shadow-md p-4 mb-4 h-48 flex flex-col justify-between`}>
            <div>
              <h3 className="text-xl font-bold">{proposal.service}</h3>
              <p className="text-gray-600">Client: {proposal.client}</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-gray-600">
                Proposed Rate: ₹ {proposal.proposedRate}
              </p>
              <span
                className={`text-sm font-bold text-white bg-${getStatusBadgeColor(proposal.status)} rounded-full px-2 py-1`}
              >
                {proposal.status === 'Rejected' ? (
                  <Link href="/freelancers/proposals/rejectedProposals">
                    <div className='flex gap-2 items-center'>

                      Rejected <EyeIcon/>
                    </div>
                 
                  </Link>
                ) : (
                  proposal.status
                )}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'yellow-500';
    case 'Accepted':
      return 'green-500';
    case 'Rejected':
      return 'red-500';
    default:
      return 'bg-gray-500';
  };
};

export default ProposalList;