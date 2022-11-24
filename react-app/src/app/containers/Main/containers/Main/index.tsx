import { memo, useEffect } from 'react';
import { UserDetailsCard } from '../../components/UserDetailsCard';
import styled from "styled-components"
import { Table } from '../../components/Table';
import { useDispatch, useSelector } from 'react-redux';
import { selectToken } from '../../../../store/selectors';
import { asyncActions } from '../../../../store/asyncActions';
import { ThunkDispatch } from 'redux-thunk';

export const Main = memo(() => {
  const token = useSelector(selectToken);
  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  useEffect(() => {
    dispatch(asyncActions.getProjects(token));
  }, [])

  return (
    <Wrapper>
      <UserDetailsCard />
      <Table />
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: auto;
  width: 50%;
`
