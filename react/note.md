什么是前端框架？



UI = F(State)




React.createElement('div', {id: 'foo'}, 'Hello')


React.createElement()



render
在内存里面进行可以中断

scheduler
   调度





Reconciler

    1.同步更新 performSyncWorkOnRoot

    2.异步更新 performConcurrentWorkOnRoot


    beginWork    Diff
    递

    completeWork
    归




<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
</ul>

UlFiber.child = Li0Fiber

Li0Fiber.sibling = Li1Fiber
Li1Fiber.sibling = Li2Fiber

Li0Fiber.return = UlFiber
Li1Fiber.return = UlFiber
Li2Fiber.return = UlFiber


fiberNode 是一个对象
{
    sibling: null,
    return:null
    child:null
}



commit
同步，不能中断

三个阶段
    beforeMutation
        commitBeforeMutationEffects
        commitBeforeMutationEffects_begin
        commitBeforeMutationEffects_complete

    mutation
        commitMutationEffects
        commitMutationEffects_begin
        commitMutationEffects_complete
    layout
        commitLayoutEffects
        commitLayoutEffects_begin
        commitLayoutEffects_complete















