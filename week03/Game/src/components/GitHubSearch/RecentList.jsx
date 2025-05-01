// src/components/GitHubSearch/RecentList.jsx
import styled from "@emotion/styled";

export default function RecentList({ recentUsers, onSelect, onRemove }) {
    if (recentUsers.length === 0) return null;

    return (
        <ListContainer>
            <Title>최근 검색어</Title>
            <Box>
                {recentUsers.map((user) => (
                    <ListItem key={user}>
                        <Name onClick={() => onSelect(user)}>{user}</Name>
                        <DeleteBtn onClick={() => onRemove(user)}>❌</DeleteBtn>
                    </ListItem>
                ))}
            </Box>
        </ListContainer>
    );
}

const ListContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Box = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 80%;

    gap: ${({ theme }) => theme.spacing.sm};
`;

const ListItem = styled.li`
    display: flex;
    justify-content: space-between;
    width: auto;
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
    border-radius: ${({ theme }) => theme.spacing.xl};
    border: none;
    background-color: ${({ theme }) => theme.colors.secondary};
`;

const Name = styled.span`
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};
    &:hover {
        text-decoration: underline;
    }

    font-size: ${({ theme }) => theme.fontSizes.lg};
    font-weight: bold;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const DeleteBtn = styled.button`
    border: none;
    background: none;
    color: red;
    font-size: 1rem;
    cursor: pointer;
`;
