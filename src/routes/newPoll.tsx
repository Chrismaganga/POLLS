import { createFileRoute } from '@tanstack/react-router'
import  { useState, useEffect } from 'react';
import { useNavigate } from '@tanstack/react-router';

import { connect, useDispatch, useSelector } from 'react-redux';
import { addQuestion } from '@/features/questions';
import { Question } from '@/types';
import { AppDispatch, RootState } from '@/store';


interface NewQuestion {
  optionOneText: string;
  optionTwoText: string;
  author: string;
}

export const Route = createFileRoute('/newPoll')({
  component: connect()(NewPoll),
})

function NewPoll({ dispatch }: { dispatch: AppDispatch }) {
  const navigate = useNavigate();
  const [firstOption, setFirstOption] = useState("");
  const [secondOption, setSecondOption] = useState("");
  const [author, setAuthor] = useState("");

  const handleFirstOptionChange = (e) => {
      const value = e.target.value;
      setFirstOption(value);
  };

  const handleSecondOptionChange = (e) => {
      const value = e.target.value;
      setSecondOption(value);
  };

  const handleAuthorChange = (e) => {
      const value = e.target.value;
      setAuthor(value);
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const question = await saveQuestion(firstOption, secondOption, author);
      dispatch(addQuestion(question));
      navigate("/");
  };

  return (
      <div>
          <h1 className="text-3xl font-bold mt-9">New Poll</h1>
          <form onSubmit={handleSubmit}>

              <div className="mt-3">
                  <label htmlFor="firstOption"
                         data-testid="firstOptionLabel"
                         className="block text-sm font-medium text-slate-700">First Option</label>
                  <div className="mt-1">
                      <input
                          value={firstOption}
                          onChange={handleFirstOptionChange}
                          type="text"
                          name="firstOption"
                          id="firstOption"
                          data-testid="firstOption"
                          className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                  </div>
              </div>

              <div className="mt-3">
                  <label htmlFor="secondOption"
                         data-testid="secondOptionLabel"
                         className="block text-sm font-medium text-slate-700">Second Option</label>
                  <div className="mt-1">
                      <input
                          value={secondOption}
                          onChange={handleSecondOptionChange}
                          type="text"
                          name="secondOption"
                          id="secondOption"
                          data-testid="secondOption"
                          className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                  </div>
              </div>

              <div className="mt-3">
                  <label htmlFor="author"
                         data-testid="authorLabel"
                         className="block text-sm font-medium text-slate-700">Author</label>
                  <div className="mt-1">
                      <input
                          value={author}
                          onChange={handleAuthorChange}
                          type="text"
                          name="author"
                          id="author"
                          data-testid="author"
                          className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400  disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none"/>
                  </div>
              </div>

              <div className="mt-6 text-right">
                  <button type="submit"
                          data-testid="submit-poll"
                          className="bg-sky-500 hover:bg-sky-700 px-5 py-2.5 text-sm leading-5 rounded-md font-semibold text-white">
                      Submit
                  </button>
              </div>

          </form>
      </div>
  );
};
