/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

const PokemonDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [pokemon, setPokemon] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
                setPokemon(res.data);
            } catch (error) {
                console.error("포켓몬 정보를 불러오는 데 실패했습니다.", error);
            }
        };

        fetchData();
    }, [id]);

    return (
        <Container>
            <Title>포켓몬 상세 정보</Title>
            <Text>포켓몬 ID: {id}</Text>

            {pokemon && (
                <div style={{ textAlign: "center" }}>
                    <h2>{pokemon.name}</h2>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div>
                        {pokemon.types.map((typeObj, index) => (
                            <span key={index} style={{ margin: "0 8px", fontWeight: "bold" }}>
                                {typeObj.type.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            <Button onClick={() => navigate(-1)}>목록 보기</Button>
        </Container>
    );
};

export default PokemonDetail;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: rgb(231, 224, 255);
    height: 40%;
    width: 40%;
    margin: auto;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
`;

const Button = styled.button`
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 5px;
    margin: 20px auto;
    display: block;

    &:hover {
        background-color: #0056b3;
    }
`;

const Text = styled.p`
    font-size: 1.2rem;
    color: rgb(89, 49, 0);
    text-align: center;
    margin-bottom: 20px;
    font-weight: bold;
`;
