const LCRS_tree_triangle = {
    val: 1,
    key: 1,
    p: null,
    left: {
        val: 2,
        p: 1,
        key: 2,
        right: {
            key: 3,
            p: 1,
            left: {
                key: 6,
                p: 3,
                left: {
                  key: 10,
                  p: 6,
                  right: {
                      key: 11,
                      p: 6
                  }
                },
                right: {
                    key: 7,
                    p: 3,
                    left: {
                        key: 12,
                        p: 7,
                        right: {
                            key: 13,
                            p: 7
                        }
                    }
                }
            }
        },
        left: {
            key: 4,
            p: 2,
            right: {
                key: 5,
                p: 2
            },
            left: {
                p: 4,
                key: 8,
                right: {
                    p: 4,
                    key: 9
                }
            }
        }
    }
};

export default LCRS_tree_triangle;
