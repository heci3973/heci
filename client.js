window.__ModuleLoader__.load({
  id: '@local/heci-plugin',
  factory(require) {
    const React = require('react');
    const h = React.createElement;

    function Badge() {
      return h(
        'div',
        {
          'aria-label': 'heci 插件已加载',
          title: 'heci 插件已加载 · github.com/heci3973/heci',
          style: {
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '2px 8px',
            borderRadius: '999px',
            fontSize: '11px',
            lineHeight: 1.5,
            letterSpacing: '0.02em',
            color: '#8ab4f8',
            background: 'rgba(36, 123, 191, 0.12)',
            border: '1px solid rgba(36, 123, 191, 0.35)',
            pointerEvents: 'none',
            userSelect: 'none',
            whiteSpace: 'nowrap',
          },
        },
        h('span', {
          style: {
            width: '6px',
            height: '6px',
            borderRadius: '50%',
            background: '#8ab4f8',
            display: 'inline-block',
          },
        }),
        'heci',
      );
    }

    return {
      inject: ['slots'],
      apply(ctx) {
        ctx.slots.inject('conversation.composer.dock', () =>
          ctx.slots.register(
            {
              name: 'conversation.composer.dock',
              id: 'heci-plugin',
              order: 5,
            },
            Badge,
          ),
        );
      },
    };
  },
});
