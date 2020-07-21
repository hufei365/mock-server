module.exports = {
    extends: ['@commitlint/config-conventional'],
}

/**
 * 提交信息格式说明
 * 格式： [type]:[subject]
 * type为下面TypeEnum几种固定类型, 用于此次提交的性质
 * subject 用于说明具体修改内容，自定义类型
 */
const TypeEnum = {
    build: '构建执行',
    chore: '构建工具相关',
    ci: 'CI 相关',
    docs: '文档更新',
    feat: '新功能',
    fix: 'bug 修复',
    perf: '性能优化',
    refactor: '功能重构',
    revert: '回滚操作',
    style: '样式变动',
    test: '单元测试',
}
