import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import {
    changeCommentValue,
    changeStarValue,
} from "../../../redux/features/reviewSlice";
import SubmitButton from "../Buttons/SubmitButton";
import CardFrame from "../CardFrame";
import Stars from "../Stars";

type PropsType = {
    submitHandler: (ev: any) => void;
};

const WriteReview = (props: PropsType) => {
    const dispatch = useDispatch();

    const starValueRef: React.MutableRefObject<number | undefined> = useRef();
    const commentValueRef: any = useRef(null);

    starValueRef.current = 0;

    const changeHandler = (newValue: number) => {
        starValueRef.current = newValue;
        dispatch(changeStarValue(starValueRef.current));
        console.log(starValueRef.current, commentValueRef.current.value);
    };

    return (
        <CardFrame title="Write a review" className="write_review">
            <form onSubmit={props.submitHandler}>
                <p className="rate_name">Rate:</p>
                <Stars
                    onChange={changeHandler}
                    isHalf={false}
                    edit={true}
                    value={starValueRef.current}
                />
                <textarea
                    ref={commentValueRef}
                    onChange={() => {
                        dispatch(
                            changeCommentValue(commentValueRef.current.value)
                        );
                    }}
                    className="userComment mb-3"
                    placeholder="Write your comment"
                    id="userComment"
                ></textarea>
                <SubmitButton text="Submit" />
            </form>
        </CardFrame>
    );
};

export default WriteReview;
