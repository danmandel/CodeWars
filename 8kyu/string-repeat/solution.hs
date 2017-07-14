module StringRepeat where

repeatStr :: Int -> String -> String
repeatStr n str = concat (replicate n str)


## Top rated
module StringRepeat where

repeatStr :: Int -> String -> String
repeatStr n = concat . replicate n
