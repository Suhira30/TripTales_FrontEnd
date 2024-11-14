import React, { useState } from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField, Button } from '@mui/material';
import reviewService from '../Pages/Service/ReviewService';
import { useNavigate } from 'react-router-dom';

export const DailogBox = ({open,onClose,postId}) => {
    const [review, setReview] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleConfirmReview = async () => {
        setLoading(true);
        try {
           const response= await reviewService.addReview(postId,review);
            // console.log("Review added successfully:", response);
            // console.log("Navigating to post:", postId);
            navigate(`/eachpost`);   
        } catch (error) {
            console.error('Error add review :', error);
        } finally {
            setLoading(false);
            
        }
    };

  return (
    <Dialog open={open} onClose={onClose}>
    <DialogTitle>Add Review</DialogTitle>
    <DialogContent>
        <DialogContentText>
            Add your reviews here !        
        </DialogContentText>
        <TextField
            autoFocus
            margin="dense"
            id="review"
            label="Review"
            type="text"
            fullWidth
            variant="standard"
            value={review}
            onChange={(e) => setReview(e.target.value)}
        />
    </DialogContent>
    <DialogActions>
        <Button onClick={onClose}>back</Button>
        <Button onClick={handleConfirmReview} disabled={loading || !review}>
            {loading ? 'adding...' : 'add'}
        </Button>
    </DialogActions>
</Dialog>

  )
}
