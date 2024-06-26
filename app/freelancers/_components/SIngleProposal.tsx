"use client"
import React, { useState } from 'react';

import data from '@/jsons/proposals';

interface Proposal {
  service: string;
  client: string;
  proposedRate: number;
  status: 'Accepted' | 'Pending' | 'Rejected';
  rejectionReason?: string;
}

const proposals: Proposal[] = data; // Ensure data is of type Proposal[]

const ProposalList: React.FC = () => {
  const [showInsights, setShowInsights] = useState(false);
  const [insights, setInsights] = useState('');
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  const handleShowInsights = (proposal: Proposal) => {
    setInsights(proposal.rejectionReason || '');
    setSelectedProposal(proposal);
    setShowInsights(true);
  };

  const handleCloseInsights = () => {
    setShowInsights(false);
  };

  return (
    <div className='text-black flex flex-wrap'>
      {proposals.map((proposal, index) => (
        <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/3 p-4 relative">
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
                className={`text-sm font-bold text-white ${getStatusBadgeColor(proposal.status)} rounded-full px-2 py-1`}
              >
                {proposal.status === 'Rejected' ? (
                  <button onClick={() => {
                    if (!showInsights) {
                      handleShowInsights(proposal);
                    } else {
                      handleCloseInsights();
                    }
                  }}>
                    {showInsights ? 'Close Insights' : 'Show Insights'}
                  </button>
                ) : (
                  proposal.status
                )}
              </span>
            </div>
          </div>
          {proposal === selectedProposal && showInsights && (
            <div className="bg-white p-4 rounded-lg shadow-md mt-4">
              <p>{insights}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Pending':
      return 'bg-yellow-500';
    case 'Accepted':
      return 'bg-green-500';
    case 'Rejected':
      return 'bg-red-500';
    default:
      return 'bg-gray-500';
  }
};

export default ProposalList;
