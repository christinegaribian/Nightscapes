export const idsSelector = (followers) => {
  if (followers){
    return (
      followers.map(
        (follower) => follower.id
      )
    )
  }
}
