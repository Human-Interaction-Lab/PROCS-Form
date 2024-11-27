import React, { useState } from 'react';

const ConversationAssessment = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    topic: '',
    setting: '',
    partner: '',
    goal: '',
    responses: Array(10).fill(null)
  });

  const questions = [
    "engage at a level I felt good about",
    "ask questions as desired",
    "share my opinion as desired",
    "share information as desired",
    "keep up with the conversation",
    "feel heard by my partner",
    "present myself the way I wanted to",
    "connect with my partner as desired",
    "say what I wanted to say",
    "participate"
  ];

  const options = [
    { label: 'Strongly Disagree', value: 5 },
    { label: 'Disagree', value: 4 },
    { label: 'Somewhat Disagree', value: 3 },
    { label: 'Somewhat Agree', value: 2 },
    { label: 'Agree', value: 1 },
    { label: 'Strongly Agree', value: 0 }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleResponseChange = (questionIndex: number, value: number) => {
    const newResponses = [...formData.responses];
    newResponses[questionIndex] = value;
    setFormData({
      ...formData,
      responses: newResponses
    });
  };

  const calculateColumnTotals = () => {
    const columnCounts = Array(6).fill(0);
    formData.responses.forEach(response => {
      if (response !== null) {
        columnCounts[5 - response] += 1;
      }
    });
    return columnCounts;
  };

  const calculateTotalScore = () => {
    const columnTotals = calculateColumnTotals();
    return columnTotals.reduce((acc, count, index) => acc + count * (5 - index), 0);
  };

  const isFormComplete = () => {
    return formData.responses.every(response => response !== null);
  };

  const handlePrintPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 print:p-1 print:bg-white">
      <div className="max-w-4xl mx-auto bg-white rounded-lg border shadow-sm print:shadow-none print:border-0">
        <div className="p-6 print:p-2">
          {/* Title and Print Button */}
          <div className="flex justify-between items-center mb-6 print:mb-2">
            <h1 className="text-2xl font-bold text-gray-800 print:text-lg print:mb-0">
              Patient-Reported Outcome of Conversational Success
            </h1>
            <button
              type="button"
              onClick={handlePrintPDF}
              className="no-print inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Print Form
            </button>
          </div>

          <form className="space-y-6 print:space-y-2">
            {/* Header Information with tighter print layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 print:gap-1 print:grid-cols-2">
              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>
              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>
              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">Topic</label>
                <input
                  type="text"
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>
              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">Setting</label>
                <input
                  type="text"
                  name="setting"
                  value={formData.setting}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>
            </div>

            {/* Partner and Goal fields with tighter print layout */}
            <div className="space-y-4 print:space-y-1">
              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">Partner</label>
                <input
                  type="text"
                  name="partner"
                  value={formData.partner}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>

              <div className="print:mb-1">
                <label className="block text-sm font-medium text-gray-700 print:text-xs print:mb-0">
                  What was the goal of this conversation?
                </label>
                <input
                  type="text"
                  name="goal"
                  value={formData.goal}
                  onChange={handleInputChange}
                  className="mt-1 print:mt-0 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 print:py-0 print:px-1 print:text-xs"
                />
              </div>
            </div>

            {/* Assessment Questions */}
            <div className="mt-6 relative print:mt-2">
              <div className="max-h-[600px] overflow-y-auto print:max-h-none print:overflow-visible">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="sticky top-0 z-10 print:relative">
                    <tr>
                      <th className="px-4 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider shadow-sm print:px-2 print:py-1 print:shadow-none">
                        Question
                      </th>
                      {options.map((option) => (
                        <th key={option.label} className="px-4 py-3 bg-gray-50 text-center text-xs font-medium text-gray-500 uppercase tracking-wider shadow-sm print:px-2 print:py-1 print:shadow-none">
                          {option.label}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {questions.map((question, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-4 py-4 text-sm text-gray-900 print:px-2 print:py-2 print:text-xs">
                          {index + 1}. In this conversation, it was difficult for me to... <span className="font-bold">{question}</span>.
                        </td>
                        {options.map((option) => (
                          <td key={option.label} className="px-4 py-4 text-center print:px-2 print:py-1">
                            <input
                              type="radio"
                              name={`question-${index}`}
                              value={option.value}
                              checked={formData.responses[index] === option.value}
                              onChange={() => handleResponseChange(index, option.value)}
                              className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500 print:h-3 print:w-3"
                            />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Results */}
            <div className="mt-6 p-4 bg-gray-50 rounded-lg print:mt-1 print:p-1 print:bg-white print:border-t">
              {isFormComplete() ? (
                <div className="print:flex print:justify-between print:items-center">
                  <div className="text-lg font-medium text-gray-900 mb-4 print:text-sm print:mb-0">
                    Results
                  </div>
                  <div className="grid grid-cols-6 gap-4 mb-4 print:gap-2 print:mb-0 print:ml-4">
                    {calculateColumnTotals().map((count, index) => (
                      <div key={index} className="text-center">
                        <div className="text-sm text-gray-500 print:text-xs print:inline print:mr-1">× {5 - index}</div>
                        <div className="font-medium text-gray-900 print:text-xs print:inline">{count}</div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right print:ml-4">
                    <span className="text-lg font-medium text-gray-900 print:text-sm">
                      Raw score: {calculateTotalScore()} / 50
                    </span>
                  </div>
                </div>

              ) : (

                <span className="text-sm text-gray-600 italic print:text-xs">
                  Complete all 10 questions to see your score
                </span>

              )}

            </div>

          </form>

        </div>
      </div>
    </div>
  );
};

export default ConversationAssessment;