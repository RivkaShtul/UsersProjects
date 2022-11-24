import { useSelector } from "react-redux"
import { selectUserDetails, selectToken } from "../../../../store/selectors"
import { Card } from 'primereact/card'
import { Avatar } from 'primereact/avatar'
import { UserDetails } from "../../../../store/types"
import styled from "styled-components"

export const UserDetailsCard = () => {
    const userDetails: UserDetails = useSelector(selectUserDetails);
    return (
        <Card style={{ width: '50%' }}>
            <ElenetWrapper>
                <Avatar image={userDetails.avatar}></Avatar>
            </ElenetWrapper>
            <ElenetWrapper>
                <label>{`name: ${userDetails.name}`}</label>
            </ElenetWrapper>
            <ElenetWrapper>
                <label>{`teams: ${userDetails.teams}`}</label>
            </ElenetWrapper>
            <ElenetWrapper>
                <label>{`date: ${userDetails.joinedAt.toString()}`}</label>
            </ElenetWrapper>
        </Card>
    )
}

const ElenetWrapper = styled.div`
  padding: 10px;
  width: 100%;
`