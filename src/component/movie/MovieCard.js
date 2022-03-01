import React, {useEffect, useState} from 'react';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import _ from "lodash";
import {Box, List, ListItem, Table, Tbody, Td, Th, Thead, Tr} from "@chakra-ui/react";
import {Text} from "@chakra-ui/layout";
import CardDisplay from "./CardDisplay";
import ReactPaginate from "react-paginate";
import {Previous, breakLabel, Paginator, PageGroup, Page, Next, generatePages} from 'chakra-paginator';

const pageSize = 6

const MovieCard = () => {
    const [posts, setPosts] = useState();
    const [paginatedPosts, setPaginatedPosts] = useState();
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/photos")
            .then(res=>{
                console.log(res.data);
                setPosts(res.data);
                setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
            });
    }, [])

    const pageCount = posts? Math.ceil(posts.length/pageSize):0;
    if(pageCount === 1) return  null;
    const pages = _.range(1, pageCount + 1)

    const pagination =(pageNo)=>{
        setCurrentPage(pageNo);
        const startIndex = (pageNo -1)* pageSize;
        const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
        setPaginatedPosts(paginatedPost)
    }
    return (
        <Box w={"95vw"} h={"100vh"}>{
            !paginatedPosts ? ("No data found") : (
                <Table className="table">
                    <Thead>
                        <Tr>
                            <Th>Album ID</Th>

                        </Tr>
                    </Thead>
                    <Tbody display={"flex"}>
                        {
                            paginatedPosts.map((post, index)=>(
                               <CardDisplay mr={"2vw"} key={index} cardDetails={post}/>
                            ))}
                    </Tbody>
                </Table>
            )}
            <nau className={"d-flex justify-content-center"}>
                <List className={"pagination"} >
                    {
                        pages.map((page)=>(
                            <ListItem className={
                                page === currentPage ? "page-item active" : "page-item"}>
                                <Text className={"page-link"} onClick={()=>pagination(page)}>{page}</Text></ListItem>
                        ))
                    }
                </List>
            </nau>

            {/*<ReactPaginate*/}
            {/*    previousLabel={"prev"}*/}
            {/*    nextLabel={"next"}*/}
            {/*    breakLabel={"..."}*/}
            {/*    breakClassName={"break-me"}*/}
            {/*    pageCount={pageCount}*/}
            {/*    marginPagesDisplayed={2}*/}
            {/*    pageRangeDisplayed={5}*/}
            {/*    onPageChange={pagination}*/}
            {/*    containerClassName={"pagination"}*/}
            {/*    subContainerClassName={"pages pagination"}*/}
            {/*    activeClassName={"active"}/>*/}
        </Box>
    );
};

export default MovieCard;
